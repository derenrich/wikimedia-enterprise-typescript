import WikimediaEnterprise from '../../index';

export async function list_codes(args: string[]): Promise<void> {
  let accessToken: string | undefined;

  // check environment variable first
  if (process.env['WME_ACCESS_TOKEN']) {
    accessToken = process.env['WME_ACCESS_TOKEN'];
  }

  if (!accessToken) {
    printUsage();
    process.exit(1);
  }

  const client = new WikimediaEnterprise();


  await client.codes.list(null, { headers: { Authorization: `Bearer ${accessToken}` } }).then((codes) => {
    console.log(codes);
  }).catch((err) => {
    console.error('Error fetching codes:', err);
  });

}

function printUsage() {
  console.error('Usage: wikimedia-enterprise list-codes');
  console.error('Requires WME_ACCESS_TOKEN environment variable to be set (see "login" command)');
}

