import React from 'react';

export default function Results(props) {
    const data =
        props.results.map((item, index) => {
            return <tr key={index}>
                <td>{item.home_team_country} Vs {item.away_team_country}</td>
                <td>{item.winner!=='Draw' ? `${item.winner} Won` : item.winner}</td>
            </tr>
        })
    return (
        <div>
            <div className="table-responsive table-main">
                <table className="table table-color">
                    <thead className="table-head">
                        <tr>
                            <th>Matches</th>
                            <th>Results</th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                       {data}
                    </tbody>
                </table>
            </div>
        </div>
    )
}