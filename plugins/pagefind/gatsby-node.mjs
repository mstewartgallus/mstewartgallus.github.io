import { spawn } from "child_process";

const pagefind = async ({reporter}) => {
    const pf = spawn("yarn",
                     ["run", "pagefind",
                      "--source", "public",
                      "--bundle-dir", "static/pagefind"]);
    pf.stdout.on('data', (data) => {
        reporter.info(data.toString());
    });
    pf.stderr.on('data', (data) => {
        reporter.warn(data.toString());
    });
    const code = await new Promise(r => pf.on('exit', r));
    if (code !== 0) {
        reporter.panic(`pagefind ${code}`);
    }
};

export const onPostBuild = async ({ stage, actions, plugins, reporter }) => {
    await pagefind({ reporter });
};
