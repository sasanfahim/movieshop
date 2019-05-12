import Raven from "raven-js";
function init() {
  Raven.config(
    "https://3278ece6eda343d98cddfa27abec53c1@sentry.io/1448775"
  ).install();
}

function log(error) {
  Raven.captureException(error);
}
export default { init, log };
