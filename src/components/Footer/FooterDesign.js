import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
const FooterDesign = () => {
    return (
        <div className='mt-20 flex  w-full h-60 bg-[#232323]'>
            <div className="text-white ml-10 mt-10 w-1/4">
                <h2 style={{ color: 'white', fontFamily: '"Dancing Script", cursive', fontSize: '30px', fontWeight: 'bold' }}>DM Store...</h2>
                <h2 className="text-white font-semibold"> Contact </h2>
                <div className="flex flex-col font-thin gap-1 mt-1 ml-4">
                    <p>Address : Matara Southern SL</p>
                    <p>Mobile  : 070-00-00000</p>
                    <p>Email  : dmstore@gamil.com</p>
                    <p>Hours   : 8.00 - 8.00 / Mon-Sat</p>
                </div>

            </div>
            <div className="w-2/4 flex" >
                <div className="flex flex-col ml-20 justify-center items-left mt-10">
                    <h2 className="text-white  font-semibold"> About.. </h2>
                    <div className="flex flex-col text-white font-thin ml-6 mt-4 gap-1">
                        <p>About Us</p>
                        <p>Delivery Information</p>
                        <p>Privacy & Policy</p>
                        <p>Terms & Conditions</p>
                    </div>
                </div>


                <div className="flex flex-col ml-40 justify-center items-left mt-10">
                    <h2 className="text-white  font-semibold"> My Account.. </h2>
                    <div className="flex flex-col text-white font-thin ml-6 mt-4 gap-1">
                        <p>Sign In</p>
                        <p>View Cart</p>
                        <p>My Wish List</p>
                        <p>Helps</p>
                    </div>
                </div>
            </div>
            <div className="w-1/4">

                <div className="text-white ml-10 mt-16 w-1/4">
                    <h2 className="text-white font-semibold"> Follow Us </h2>
                    <div className='flex flex-row gap-2 mt-4 ml-4 '>
                        <div><FacebookRoundedIcon/></div>
                        <div><InstagramIcon/></div>
                        <div><TwitterIcon/></div>
                        <div><PinterestIcon/></div>
                        <div><YouTubeIcon/></div>
                      
                    </div>


                    <h2 className="text-white font-semibold mt-4 ">Payment </h2>
                    <div className='mt-4 '>
                        <img src='https://help.zazzle.com/hc/article_attachments/360010513393' alt=''/>
                      
                    </div>


                </div>

            </div>
        </div>
    )
}

export default FooterDesign
