type WelcomeCardProps = {
  firstName: string;
  lastName: string;
};

function WelcomeCard({ firstName, lastName }: WelcomeCardProps) {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h4 className="text-muted mb-1">
          Welcome back,
          <h1  className="fw-bold text-primary">
            {" "}
            {firstName} {lastName}
          </h1>
        </h4>

        {/* <p className="text-muted mb-0">Have a productive day.</p> */}
      </div>
    </div>
  );
}

export default WelcomeCard;
