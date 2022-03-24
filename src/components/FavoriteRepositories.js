const FavoriteRepositories = () => {
  return (
    <div className="px-12 py-4 text-lg dark:text-white text-center">
      <p>
        Some repositories:{" "}
        <a
          className="hover:text-primary font-bold"
          href="https://date-assistant.readthedocs.io/en/latest/"
          target="_blank"
          rel="noopener noreferrer"
        >
          🗓 date-assistant
        </a>
        ,{" "}
        <a
          className="hover:text-primary font-bold"
          href="https://jalvaradosegura.github.io/tempfolder/"
          target="_blank"
          rel="noopener noreferrer"
        >
          🗂 tempfolder
        </a>
        ,{" "}
        <a
          className="hover:text-primary font-bold"
          href="https://github.com/jalvaradosegura/tmp-folder"
          target="_blank"
          rel="noopener noreferrer"
        >
          🗂 tmp-folder
        </a>
        ,{" "}
        <a
          className="hover:text-primary font-bold"
          href="https://github.com/jalvaradosegura/version-checker"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔍 version-checker
        </a>
        .
      </p>

      <p className="mt-2">
        Some articles:{" "}
        <a
          className="hover:text-primary font-bold"
          href="https://dev.to/jalvaradosegura/another-way-of-working-with-temporary-files-2ono"
          target="_blank"
          rel="noopener noreferrer"
        >
          Another way of working with temporary files
        </a>
        ,{" "}
        <a
          className="hover:text-primary font-bold"
          href="https://dev.to/jalvaradosegura/create-your-own-pre-commit-hook-3kh"
          target="_blank"
          rel="noopener noreferrer"
        >
          Create your own pre-commit hook
        </a>
        ,{" "}
        <a
          className="hover:text-primary font-bold"
          href="https://dev.to/jalvaradosegura/dont-forget-to-update-that-value-in-those-files-3i78"
          target="_blank"
          rel="noopener noreferrer"
        >
          Don{"'"}t forget to update that value in those files
        </a>
        .
      </p>
    </div>
  )
}

export default FavoriteRepositories
