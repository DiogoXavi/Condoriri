import React, { useState } from "react";
import type { CategoryType, ITeamStanding } from "../../types/types";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Logo,
  TeamName,
  TitleTeam,
  ButtonContainer,
} from "./styles";
import { getLogo } from "../../tools/tools";
import { Typography, Button } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import BarChartIcon from "@mui/icons-material/BarChart";
import TableRowsIcon from "@mui/icons-material/TableRows";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

interface CustomTickProps {
  x?: number;
  y?: number;
  payload?: {
    value: string;
  };
}

const CustomXAxisTick = ({ x = 0, y = 0, payload }: CustomTickProps) => {
  const teamName = String(payload?.value || "");

  return (
    <g transform={`translate(${x},${y})`}>
      <image href={getLogo(teamName)} x={-12} y={0} width={24} height={24} />

      <text
        x={0}
        y={38}
        textAnchor="middle"
       fill="#0f1545"
        fontSize={11}
        fontWeight="bold"
      >
        {teamName.length > 10 ? `${teamName.slice(0, 10)}...` : teamName}
      </text>
    </g>
  );
};

const CustomYAxisTick = ({ x = 0, y = 0, payload }: CustomTickProps) => {
  const teamName = String(payload?.value || "");

  return (
    <g transform={`translate(${x},${y})`}>
      <image href={getLogo(teamName)} x={-115} y={-12} width={24} height={24} />

      <text
        x={-82}
        y={5}
        textAnchor="start"
         fill="#0f1545"
        fontSize={12}
        fontWeight="bold"
      >
        {teamName.length > 12 ? `${teamName.slice(0, 11)}.` : teamName}
      </text>
    </g>
  );
};

interface Props {
  standings: ITeamStanding[];
  category: CategoryType;
}

const StandingsTable: React.FC<Props> = ({ standings, category }) => {
  const [showChart, setShowChart] = useState(false);
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const QUALIFIED_BY_CATEGORY: Record<CategoryType, number> = {
    Juvenil: 8,
    Damas: 6,
    Senior: 4,
    Infantil: 4,
  };

  const qualifiedLimit = QUALIFIED_BY_CATEGORY[category] ?? 8;
  return (
    <TableContainer>
      {standings.length === 0 ? (
        <>
          <Typography
            variant="h4"
            style={{
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            Todavía no hay tabla de posiciones.
            <br />
            Pronto se publicará la tabla de posiciones del campeonato.
            <br />
            <br />
            Si necesitas más información puedes comunicarte con los
            organizadores.
            <br />
            <br />
          </Typography>
          <ButtonContainer>
            <Button
              variant="contained"
              startIcon={<QuestionAnswerIcon />}
              href="/about"
            >
              CONTACTOS
            </Button>
          </ButtonContainer>
        </>
      ) : (
        <>
          <ButtonContainer
            style={{
              marginBottom: "8px",
              marginTop: "0",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              startIcon={showChart ? <TableRowsIcon /> : <BarChartIcon />}
              onClick={() => setShowChart(!showChart)}
              size="small"
            >
              {showChart ? "Ver Tabla" : "Ver Gráfico"}
            </Button>
          </ButtonContainer>

          {showChart ? (
            <div
              style={{
                width: "100%",
                height: 900,
              }}
            >
              <ResponsiveContainer>
                <BarChart
                  data={standings}
                  layout={isMobile ? "vertical" : "horizontal"}
                  margin={{
                    top: 20,
                    right: 20,
                    left: isMobile ? 40 : 10,
                    bottom: isMobile ? 20 : 90,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  {isMobile ? (
                    <>
                      <XAxis type="number" />
                      <YAxis
                        type="category"
                        dataKey="team"
                        width={150}
                        tick={<CustomYAxisTick />}
                      />
                      <Tooltip />
                      <Bar
                        dataKey="points"
                        fill="#0c8a9b"
                        radius={[0, 8, 8, 0]}
                        label={{ position: "right" }}
                      />
                    </>
                  ) : (
                    <>
                      <XAxis
                        dataKey="team"
                        interval={0}
                        height={70}
                        tick={<CustomXAxisTick />}
                      />
                      <YAxis />
                      <Tooltip />
                      <Bar
                        dataKey="points"
                        fill="#0c8a9b"
                        radius={[8, 8, 0, 0]}
                        label={{ position: "top" }}
                      />
                    </>
                  )}
                </BarChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Equipo</TableCell>
                  <TableCell>PJ</TableCell>
                  <TableCell>G</TableCell>
                  <TableCell>E</TableCell>
                  <TableCell>P</TableCell>
                  <TableCell>GF</TableCell>
                  <TableCell>GC</TableCell>
                  <TableCell>DG</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>Pts</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {standings.map((team, index) => (
                  <TableRow
                    key={team.team}
                    style={{
                      backgroundColor:
                        index < qualifiedLimit ? "#e8f5e9" : "transparent",
                      borderLeft:
                        index < qualifiedLimit ? "4px solid #2e7d32" : "none",
                    }}
                  >
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      <TitleTeam>
                        <Logo src={getLogo(team.team)} alt={team.team} />
                        <TeamName>{team.team}</TeamName>
                      </TitleTeam>
                    </TableCell>
                    <TableCell>{team.matchesPlayed}</TableCell>
                    <TableCell>{team.wins}</TableCell>
                    <TableCell>{team.draws}</TableCell>
                    <TableCell>{team.losses}</TableCell>
                    <TableCell>{team.goalsFor}</TableCell>
                    <TableCell>{team.goalsAgainst}</TableCell>
                    <TableCell>{team.goalDifference}</TableCell>
                    <TableCell
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      {team.points}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </>
      )}
    </TableContainer>
  );
};

export default StandingsTable;
