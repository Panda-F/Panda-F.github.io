import { rm } from "node:fs/promises";
import Eleventy from "@11ty/eleventy";

await rm(new URL("../dist/", import.meta.url), { recursive: true, force: true });
await new Eleventy("src", "dist").write();
