import Title from "../components/Title";

const Profile = (props) => {
  const links = [
    {title: "GitHub", link: "https://github.com/shioyarare"},
    {title: "Blog", link: "https://blog.shioyarare.com"},
    {title: "Twitter", link: "https://twitter.com/shioya_net"},
    {title: "AtCoder", link: "https://atcoder.jp/users/shioya"}
  ].map( (e) => (
    <li> <a href={e.link}>{e.title}</a></li>
  ));

  return (
    <div>
      <Title name={"プロフィール"}/>
      <ul>
        <li> 原翔耶 はら しょうや / Shoya HARA</li>
        <li> 1999.8.16 宮崎生</li>
        <li> M1, 九州工業大学 情報創成工学科 在学中</li>
        <li> admin[at]sp.harashio.jp</li>
      </ul>
      <p>
        こんにちは〜
      </p>

      <ul>
        {links}
      </ul>
    </div>
  );
}

export default Profile;