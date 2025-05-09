import calendar from "../images/showcase_calendar.png";
function Book_an_appointment()
{
    return(
        <>
        <h1 className="text-center text-[#002E5B] text-3xl pt-5">You can count on our work</h1>
        <p className="text-center text-md pt-5 pb-12 text-[#002E5B]">Understanding your requirements and objectives is important to us. We listen and work together to create a truly unique and unforgettable experience.</p>
        <img src={calendar}></img>
        
        <h1 className="text-center text-[#002E5B] text-3xl pt-12">Connect with Financial Professional to Support Your Need</h1>
        <p className="text-center text-md pt-5 text-[#002E5B]">Discover why hundreds of client households place their trust in us for investment management and how we can assist you in attaining your financial objectives. Our driving force is to aid individuals</p>
        </>
    );
}
export default Book_an_appointment;