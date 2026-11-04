import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { collectLicenseInventory, renderLicenseArtifacts } from './inventory.mjs';

const root = fileURLToPath(new URL('../../', import.meta.url));

async function main() {
  const inventory = await collectLicenseInventory();
  const artifacts = renderLicenseArtifacts(inventory);
  for (const [relativePath, contents] of artifacts) {
    const destination = join(root, relativePath);
    await mkdir(dirname(destination), { recursive: true });
    await writeFile(destination, contents);
  }
  console.log(`Generated license inventory for ${inventory.dependencyCount} packages (${inventory.missingDirectDependencies.length} direct dependencies missing).`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error(`License inventory generation failed: ${error.message}`);
    process.exitCode = 1;
  });
}
