/**
 * name: ideal-driveway
 * version: v1.0.0
 * description: This is a templare repo that will create a Vite workflow to ease creation of Javascript modules with a dev server, GitHub Pages support and automated publishing to NPM.
 * author: John F. Morton <john@johnfmorton.com> (https://supergeekery.com)
 * repository: https://github.com/johnfmorton/ideal-driveway
 * build date: 2023-03-07T19:25:45.266Z 
 */
function init(message) {
  console.log(message);
  const messageOutputElement = document.getElementById("messageOutput");
  if (messageOutputElement) {
    messageOutputElement.innerHTML = message;
  }
}
const idealDriveway = {
  init
};
export {
  idealDriveway as default
};
