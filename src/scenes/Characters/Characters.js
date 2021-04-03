import React from "react";
import Page from "../../shared/components/Page/Page";

const pcDetails = [
  { name: "Snips", player: "Airiel", race: "Lizardfolk??", class: "", hp: "", ac: "", level: "" },
  { name: "Kaidok", player: "Kyle", race: "", class: "", hp: "", ac: "", level: "" },
  { name: "Kaidok", player: "Kyle", race: "", class: "", hp: "", ac: "", level: "" },
  { name: "Kaidok", player: "Kyle", race: "", class: "", hp: "", ac: "", level: "" },
];

function Characters() {
  return (
    <Page title="PC's">
      Jello from the Characters page of whosits
      {pcDetails.map(pc => {
        return (
          <>
            Name: {pc.name} <br />
            Player: {pc.player} <br />
            race: {pc.race} <br />
            class: {pc.class} <br />
            hp: {pc.hp} <br />
            ac: {pc.ac} <br />
            level: {pc.level}
            <br /><br />
          </>
        );
      })}
    </Page>
  );
}

export default Characters;
