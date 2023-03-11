import { promises as fs } from "fs";
import { mkResolve } from "../../src/utils/resolve.mjs";

const resolve = mkResolve(import.meta);

const typeDefs = fs.readFile(resolve('./type-defs.gql'),
                             { encoding: 'utf-8' });

export const createSchemaCustomization = async ({
    actions: { createTypes }
}) => await createTypes(await typeDefs);
