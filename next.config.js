const withNextIntl = require("next-intl/plugin")();

module.exports = withNextIntl({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        /*        ( "https:" , "" , [ "xyzabc.supabase.co" ] ) */
        hostname: `${process.env.NEXT_PUBLIC_SUPABASE_URL}`.split("/").at(-1)
      }
    ]
  }
});
