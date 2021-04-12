import React, { useEffect } from "react";
import { useParams } from "react-router";
import { connect } from "react-redux";
import { getShow } from "../redux/action";
import "./Show.css";
import { AppState } from "../redux/store";

interface ShowProps {
   show: any
   getShow: (id: any) => void
}

const Show: React.FC<ShowProps> = ({ getShow, show }) => {
   let id: object = useParams();

   useEffect(() => {
      getShow(id);
      // eslint-disable-next-line
   }, []);

   return (
      <div className="conteiner d-flex align-items-center justify-content-center">
         <div className="movie-card">
            <div
               className="movie-header manOfSteel"
               style={{ backgroundImage: `url(${show?.image?.original})` }}
            >
               <div className="header-icon-container"></div>
            </div>
            <div className="movie-content">
               <div className="movie-content-header">
                  <h3 className="movie-title">{show?.name}</h3>
                  <div className="imax-logo">{show?.network?.name}</div>
               </div>
               <div className="movie-info">
                  <div className="info-section">
                     <label>Premiered</label>
                     <span>{show?.premiered}</span>
                  </div>
                  <div className="info-section">
                     <label>Language</label>
                     <span>{show?.language}</span>
                  </div>
                  <div className="info-section">
                     <label>Status</label>
                     <span>{show?.status}</span>
                  </div>
                  <div className="info-section">
                     <label>Seat</label>
                     <span>21,22</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

const mapStateToProps = (state: AppState) => ({
   show: state.show,
});

const mapDispatchToProps = {
   getShow,
};

export default connect(mapStateToProps, mapDispatchToProps)(Show);
