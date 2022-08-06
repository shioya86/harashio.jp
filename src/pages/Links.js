import Title from "../components/Title";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const styles = {
  stack: {
    width: "100%",
    maxWidth: 100,
  },

  button: {
    width: '80%',
    height: 50,
    margin: 10,
  }
}

function Links() {
  const links = [
    {name: "github", link: "https://github.com/shioyarare"},
    {name: "twitter", link: "https://twitter.com/shioya_net"},
    {name: "blog", link: "https://blog.shioyarare.com"},
    {name: "atcoder", link: "https://atcoder.jp/users/shioya"}
  ];

  return (
    <>
      <Title name="Links" />
      {
        links.map( (e) => (
          <ListItem>
              <ListItemButton href={e.link}>
                <ListItemText primary={e.name} secondary={e.link} />
              </ListItemButton>
          </ListItem>
        ))
      }
    </>
  );
}

export default Links;