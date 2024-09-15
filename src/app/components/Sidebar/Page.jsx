"use client";
import { categories } from "@/utils/constants";
import './style.css';
import Button from '@mui/material/Button';
import { useContext } from "react";
import { Context } from "@/AppContent/context";

const Sidebar = () => {
  const { fetchData, endPoint, selectedCat, setSelectedCat } = useContext(Context);
  const context = useContext(Context);

  const getCatData = (cat) => {
    setSelectedCat(cat); 
    fetchData(`${endPoint}${cat}`); 
  };

  return (
    <div className={`sidebarWrapper ${context.toggle ? 'expend' : ''}`}>
      <div className={`sidebar ${context.toggle ? 'expend' : ''}`}>
        {categories?.map((item, index) => (
          <>
            <Button
              key={index}
              onClick={() => getCatData(item.name)} 
              className={`d-flex ${selectedCat === item.name ? 'active' : ''} ${context.toggle ? 'flex-column' : ''}`}
              startIcon={<span className="icon">{item.icon}</span>}
            >
              {item.name === "New" ? "Home" : item.name}
            </Button>

            {item.divider && <div className="divider my-3" key={index + 255}></div>}
          </>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
