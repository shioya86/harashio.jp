import Title from "../components/Title";

function Profile() {
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
        <li> GitHub </li>
        <li> Blog </li>
        <li> Twitter </li>
      </ul>
    </div>
  );
}

export default Profile;