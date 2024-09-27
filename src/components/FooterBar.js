import React from "react";

export default function FooterBar() {
    return(
    <div className="Footer">
        <div className="row">
            <div className="column">
            <h1>Team Logo</h1>
            </div>
            <div className="column">
            <h1>The Team</h1>
            <p>Links to key pages</p>
            </div>
            <div className="column">
            <h1>Races</h1>
            <p>Links to race pages</p>
            </div>
            <div className="column">
            <h1>Email Lists</h1>
            <p>Add racer mailing list to this</p>
            </div>
            <div className="column">
            <h1>Contacts</h1>
            </div>
        </div>
        <div className="row">
            <h2> Social Media Links </h2>
            <p>The official online home for the California Polytechnic State University (SLO) 
                Triathlon Team. We are a club sports team that aims to make tri fun and accessible 
                for students with all levels of ability and commitment.</p>
        </div>
        <div className= "row sponsors">
            <h2> Sponsor Content</h2>
            <p>Links to the sponsors pages via logos</p>
        </div>
    </div>
    )
}