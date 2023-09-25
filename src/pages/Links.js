import Title from "../components/Title";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Card from "@material-ui/core/Card";

const styles = {
  card: {
    padding: 10,
    boxShadow: "none"
  },
  item: {
    padding: 0
  }
}

function Links() {
  const links = [
    {name: "GitHub", link: "https://github.com/shioya86"},
    {name: "Twitter", link: "https://twitter.com/shioya86"},
    {name: "shioya's blog", link: "https://blog.harashio.jp"},
    {name: "AtCoder", link: "https://atcoder.jp/users/shioya"},
    {name: "Instagram", link: "https://www.instagram.com/harashio.jp"}
  ];

  return (
    <Card style={styles.card}>
      <Title name="Links" />
      {
        links.map( (e) => (
          <ListItem style={styles.item}>
              <ListItemButton href={e.link}>
                <ListItemText primary={e.name} secondary={e.link} />
              </ListItemButton>
          </ListItem>
        ))
      }
    </Card>
  );
}

export default Links;