const FavoriteRepositories = () => {
  return (
    <div className="px-12 py-4 text-lg dark:text-white text-center">
      <p>
        <a
          className="hover:text-primary font-bold"
          href="https://date-assistant.readthedocs.io/en/latest/"
          target="_blank"
          rel="noopener noreferrer"
        >
          🗓 date-assistant
        </a>{" "}
        and{" "}
        <a
          className="hover:text-primary font-bold"
          href="https://jalvaradosegura.github.io/tempfolder/"
          target="_blank"
          rel="noopener noreferrer"
        >
          🗂 tempfolder
        </a>{" "}
        are currently the packages I am most proud of.
      </p>

      <p>Together they have over 13,000 downloads.</p>
    </div>
  );
};

export default FavoriteRepositories;
