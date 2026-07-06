function Dashboard() {
    console.log("Dashboard Rendered");

    
    return (
        <div
            style={{
                border: "2px solid green",
                padding: "20px",
                marginTop: "20px"
            }}
        >
            <h2>Dashboard Component</h2>
            <p>This component was loaded lazily.</p>
        </div>
    );
}

export default Dashboard;