const LinksSocialMedia = {
  github: "FernandoPatrick",
  youtube: "channel/UC7CQ7kXLizLlB23QasPi_KA",
  facebook: "fernndopatrick",
  instagram: "fernandoupatrick",
  twitter: "Fernand34796788",
};

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`;
  }
}
changeSocialMediaLinks();

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`;

  fetch(url)
    .then(response => response.jason())
    .then(data => {
      userName.texteContent = data.name;
      userBio.textContent = data.bio;
      userLink.href = data.html_url;
      UserPhoto.src = data.avatar_url;
      userLogin.textcontent = data.Login;
    });
}

getGitHubProfileInfos();
