import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useFetch } from "../../hooks/useSWR";
import { social } from "@/data/NavItems";
import DOMPurify from 'isomorphic-dompurify';


export default function Album() {
          // SWR call for all permissions
          const { GetTeams } = useFetch();
          const { data: teams } = GetTeams();
            // Define a function to sanitize HTML
  const sanitizeHTML = (html) => {
    return { __html: DOMPurify.sanitize(html) };
  };
  return (
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {teams?.map((team) => (
              <Grid item key={team.team_id} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    component="img"
                     image={team.team_image}
                  />
                  <div className="team-one__content">
                      <h2 className=''>{team.team_names}</h2>
                      <h4 className="team-one__member-title">{team.team_title}</h4>
                      <p className="team-one__text-box" dangerouslySetInnerHTML={sanitizeHTML(team.team_bio)} />

                    </div>
                    <div className="team-one__social">
                      {social.map(({ icon, link }, index) => (
                        <a href={link} key={index}>
                          <i className={`fab ${icon}`}></i>
                        </a>
                      ))}
                    </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
  );
}