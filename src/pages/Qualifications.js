import Title from "../components/Title";
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function Qualifications() {
  const rows = [
    {date: "9.2018", name: "ITパスポート"},
    {date: "5.2019", name: "基本情報技術者資格"},
    {date: "3.2020", name: "準学士(工学) - 都城工業高等専門学校"},
    {date: "3.2022", name: "学士(情報工学) - 九州工業大学"}
  ]
  return (
    <div>
      <Title name={"Qualifications"} />
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
        {
          rows.map( (e) => (
            <ListItem>
              <ListItemText primary={e.name} secondary={e.date} />
            </ListItem>
          ))
        }
      </List>
    </div>
  );
}

export default Qualifications;