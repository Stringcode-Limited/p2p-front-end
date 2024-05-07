import "./AppOrderBody.css";
import left from "../../../../assets/images/left.png";
import Search from "../../../../components/Search/Search";
import OrderCard from "../../../../components/OrderCard/OrderCard";
import Pending from "../../../../components/Pending/Pending";
import axios from "axios";
import { useEffect, useState } from "react";
import Cookie from "js-cookie";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

function AppOrderBody() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {

    const fetchOrders = async () => {
      try {
        const response = await axios.get('https://p2p-qrjp.onrender.com/api/v1/order', {
          headers: {
            Authorization: `Bearer ${Cookie.get('token')}`
          }
        });
        setOrders(response.data);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        if (error.response.status === 404) {
          setEmpty(true);
        } else if (error.response.status === 401) {
          // user is not authenticated
          const navigate = useNavigate();
          navigate('/login');
        }
      }
    }

    fetchOrders();
    
  }, []);

  return (
    <>
      <div className="orderBody">
        <div className="top">
          <img src={left} />
          <p className="orders">Orders</p>
        </div>
        <div className="center">
          <Search />
          <Pending />
        </div>
        <div className="bottom">
          {loading && <CircularProgress />}
          {empty ? (
            <div className="empty">
              <img src="/no-order.jpeg"/>
            </div>
          ) : (
            orders.map((order: any, index: number) => (
              <OrderCard
                key={index}
                image={order.buyer.profile_image}
                fullName={order.buyer.fullname}
                name={order.buyer.username}
                type={order.tradeType}
                price={order.pricePerCoin}
                quantity={order.totalQuantityOfCryptoBought}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default AppOrderBody;
