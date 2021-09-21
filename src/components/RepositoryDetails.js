const RepositoryDetails = () => {
  return (
    <div className="flex justify-center">
      <div className="pt-4 text-lg dark:text-white">
        <p>
          🗓{" "}
          <a
            className="hover:text-primary"
            href="https://github.com/jalvaradosegura/date-assistant"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="font-bold">date-assistant</span>
          </a>{" "}
          and 🗂{" "}
          <a
            className="hover:text-primary"
            href="https://github.com/jalvaradosegura/tempfolder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="font-bold">tempfolder</span>
          </a>{" "}
          are currently the projects I am most proud of.
        </p>
        <p>They have over 6,000 downloads.</p>
      </div>
    </div>
  );
};

export default RepositoryDetails;
