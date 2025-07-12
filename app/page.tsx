'use client';

import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const cpiData = [
  { month: "Jan", value: 3.1 },
  { month: "Feb", value: 3.0 },
  { month: "Mar", value: 2.9 },
  { month: "Apr", value: 2.6 },
  { month: "May", value: 2.4 },
];

const yieldData = [
  { month: "Jan", value: 4.0 },
  { month: "Feb", value: 4.2 },
  { month: "Mar", value: 4.3 },
  { month: "Apr", value: 4.5 },
  { month: "May", value: 4.42 },
];

const events = [
  { date: "Jul 15", event:
