type StatCardProps = {
  title: string;
  value: number | string;
};

export default function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="card shadow-sm">
      <div className="card-body text-center">
        <h2 className="fw-bold">{value}</h2>
        <h6 className="text-muted">{title}</h6>

      </div>
    </div>
  );
}
