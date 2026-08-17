import React from "react";
import BaseComponent from "../../BaseComponent/BaseComponent";
import './responsibility-achievement.css';
import {
  Box,
  Typography,
  Grid,
  Paper,
} from "@mui/material";

import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import LightbulbRoundedIcon from "@mui/icons-material/LightbulbRounded";
import EventRoundedIcon from "@mui/icons-material/EventRounded";

const cards = [
  {
    title: "Organizer & Speaker – SCOS",
    icon: <CampaignRoundedIcon sx={{ fontSize: 18 }} />,
    color: "#6366f1",
    bg: "#f8f9ff",
    points: [
      "Conducted web dev workshops for 180+ students.",
      "Spoke on service vs product-based tech firms.",
      "Coordinated guests & managed an event.",
    ],
  },
  {
    title: "Achievements",
    icon: <EmojiEventsRoundedIcon sx={{ fontSize: 18 }} />,
    color: "#ca8a04",
    bg: "#fffdf7",
    points: [
      "Contributed to open-source repositories.",
      "Organized technical workshops and seminars.",
      "Led successful project/event teams.",
      "NSS volunteer in social service initiatives.",
    ],
  },
  {
    title: "Hobbies & Interests",
    icon: <LightbulbRoundedIcon sx={{ fontSize: 18 }} />,
    color: "#16a34a",
    bg: "#f7fff9",
    points: [
      "Exploring new technologies and frameworks.",
      "Enjoy solving logical & real-world problems.",
    ],
  },
  {
    title: "Event Management & Planning",
    icon: <EventRoundedIcon sx={{ fontSize: 18 }} />,
    color: "#db2777",
    bg: "#fff7fb",
    points: [
      "Successfully managed weddings & college festivals.",
      "Handled show flow, onground coordination, logistics & budgeting",
      "Led vendor communication and execution teams.",
      "Delivered smooth event experiences.",
    ],
  },
];

function ResponsibilityAchievement() {
  return (
    <BaseComponent className="home-responsibility-achievement">

      {/* HEADING */}

      <Box
        sx={{
          textAlign: "center",
          mb: 5,

        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: "#ffffffff",
            fontSize: {
              xs: "1.5rem",
              md: "2rem",
            },
          }}
        >
          🤝 Responsibilities & 🎯 Achievements
        </Typography>
      </Box>

      {/* CENTER CONTAINER */}

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",

        }}
      >

        {/* CARDS */}
        <Box
          sx={{
            width: {
              xs: "100%",
              sm: "90%",
              md: "75%",
            },

            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
            },

            gap: 3,
          }}
        >

          {cards.map((card, index) => (

            <Paper
              key={index}
              elevation={0}
              sx={{
                p: 3,

                borderRadius: "18px",

                background: `rgba(24, 23, 23, 0.45)`,

                border: `3px solid ${card.color}20`,

                transition: "0.3s ease",

                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
                },
              }}
            >

              {/* TITLE */}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 2,
                }}
              >

                <Box
                  sx={{
                    color: card.color,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {card.icon}
                </Box>

                <Typography
                  sx={{
                    fontWeight: 600,
                    color: card.color,

                    fontSize: {
                      xs: "0.95rem",
                      sm: "1rem",
                    },
                  }}
                >
                  {card.title}
                </Typography>

              </Box>

              {/* POINTS */}

              <Box
                component="ul"
                sx={{
                  pl: 2,
                  m: 0,
                }}
              >

                {card.points.map((point, i) => (

                  <Typography
                    component="li"
                    key={i}
                    sx={{
                      color: "#929090",

                      fontSize: {
                        xs: "1rem",
                        sm: "1.1rem",
                      },

                      mb: 1,
                      lineHeight: 1.7,
                    }}
                  >
                    {point}
                  </Typography>

                ))}

              </Box>

            </Paper>

          ))}

        </Box>

      </Box>

    </BaseComponent>
  );
}

export default ResponsibilityAchievement;