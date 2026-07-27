script_arg <- commandArgs(trailingOnly = FALSE)[grep("^--file=", commandArgs(trailingOnly = FALSE))][1]
script_path <- sub("^--file=", "", script_arg)
root <- normalizePath(file.path(dirname(script_path), ".."), mustWork = FALSE)
workspace_materials <- normalizePath(file.path(getwd(), "@Materi Kuliah"), mustWork = FALSE)
if (dir.exists(workspace_materials)) {
  root <- workspace_materials
}
if (is.na(root) || !dir.exists(root)) {
  root <- getwd()
}
root <- normalizePath(root, mustWork = TRUE)
Sys.setenv(LANG = "C.UTF-8", LC_ALL = "C.UTF-8")

pandoc_dirs <- c(
  "/Applications/RStudio 2.app/Contents/Resources/app/quarto/bin/tools/aarch64",
  "/Applications/RStudio.app/Contents/Resources/app/quarto/bin/tools/aarch64",
  "/Applications/RStudio 2.app/Contents/Resources/app/quarto/bin/tools/x86_64",
  "/Applications/RStudio.app/Contents/Resources/app/quarto/bin/tools/x86_64"
)
pandoc_dir <- pandoc_dirs[file.exists(file.path(pandoc_dirs, "pandoc"))][1]
if (!is.na(pandoc_dir) && nzchar(pandoc_dir)) {
  Sys.setenv(RSTUDIO_PANDOC = pandoc_dir)
}

files <- list.files(root, pattern = "[.][Rr]md$", recursive = TRUE, full.names = TRUE)
files <- files[!grepl("/[.]", files)]
files <- sort(files)

log_dir <- file.path(root, "render_logs")
dir.create(log_dir, showWarnings = FALSE)
log_file <- file.path(log_dir, "render_all_rmd.log")
if (file.exists(log_file)) file.remove(log_file)

write_log <- function(...) {
  cat(..., "\n", file = log_file, append = TRUE, sep = "")
  cat(..., "\n", sep = "")
}

write_log("Rendering ", length(files), " Rmd files")

ok <- character()
failed <- list()

for (input in files) {
  rel <- sub(paste0("^", gsub("([][{}()+*^$|\\\\?.])", "\\\\\\1", root), "/?"), "", input)
  write_log("\n--- ", rel)
  old <- setwd(dirname(input))
  result <- tryCatch({
    rmarkdown::render(
      input = basename(input),
      output_format = "html_document",
      output_file = sub("[.][Rr]md$", ".html", basename(input)),
      envir = new.env(parent = globalenv()),
      quiet = TRUE
    )
  }, error = function(e) e)
  setwd(old)
  if (inherits(result, "error")) {
    failed[[rel]] <- conditionMessage(result)
    write_log("FAILED: ", conditionMessage(result))
  } else {
    ok <- c(ok, rel)
    write_log("OK: ", sub(paste0("^", gsub("([][{}()+*^$|\\\\?.])", "\\\\\\1", root), "/?"), "", normalizePath(result, mustWork = FALSE)))
  }
}

write_log("\nSummary")
write_log("OK: ", length(ok))
write_log("FAILED: ", length(failed))
if (length(failed)) {
  for (name in names(failed)) write_log("* ", name, ": ", failed[[name]])
  quit(status = 1)
}
