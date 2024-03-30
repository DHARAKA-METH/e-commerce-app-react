import coverImage from '../../img/cover.jpg'
const HomeDesign = () => {
    return (
        <div className="w-full mt-20  " >
            <div className="w-full flex justify-center items-center gap-2" >

                <a href='#'><img src='https://fbpros3v1.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2022/04/ekko-removebg-preview.png' alt='logoes' /></a>
                <a href='#'><img src='https://fbpros3v1.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2022/04/crocadile-removebg-preview.png' alt='logoes' /></a>
                <a href='#'><img src='https://fbpros3v1.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2022/04/bug-junior-removebg-preview.png' alt='logoes' /></a>
                <a href='#'><img src='https://fbpros3v1.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2022/04/boss-removebg-preview.png' alt='logoes' /></a>
                <a href='#'><img src='https://fbpros3v1.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2022/04/amy-removebg-preview.png' alt='logoes' /></a>
                <a href='#'><img src='https://fbpros3v1.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2022/04/amani-removebg-preview.png' alt='logoes' /></a>
                <a href='#'><img src='https://fbpros3v1.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2022/04/giggles-removebg-preview.png' alt='logoes' /></a>
                <a href='#'><img src='https://fbpros3v1.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2022/04/street-removebg-preview.png' alt='logoes' /></a>

            </div>
            <div>
                <img src={coverImage} alt='' />
                <div style={{ position: 'relative', marginTop: '-150px', marginLeft: '30px' }}>
                    <h2 className='text-2xl font-semibold'>Dress to impress</h2>
                    <p>Dress to impress and make the best of every day. </p>
                </div>

            </div>
            <div className='w-full flex mt-28 gap-14 justify-center items-center'>
                <div className='flex gap-4'><img src='https://www.fashionbug.lk/wp-content/themes/fashionbug-theme/assets/img/delivery.png' alt=''></img>ISLAND-WIDE <br /> DELIVERY</div>
                <div className='flex gap-4'><img src='https://www.fashionbug.lk/wp-content/themes/fashionbug-theme/assets/img/money.png' alt=''></img>CASH ON <br /> DELIVERY</div>
                <div className='flex gap-4'><img src='https://www.fashionbug.lk/wp-content/themes/fashionbug-theme/assets/img/shop.png' alt=''></img>ISLAND-WIDE <br /> STORES</div>
                <div className='flex gap-4'><img src='https://www.fashionbug.lk/wp-content/themes/fashionbug-theme/assets/img/exchange.png' alt=''></img>EXCHANGE FROM <br /> ANY STORE</div>
                <div className='flex gap-4'><img src='https://www.fashionbug.lk/wp-content/themes/fashionbug-theme/assets/img/card.png' alt=''></img>SECURE <br /> PAYMENTS</div>
                <div className='flex gap-4'><img src='https://www.fashionbug.lk/wp-content/themes/fashionbug-theme/assets/img/dress.png' alt=''></img>UNLIMITED <br /> UNIQUE DESIGN</div>
            </div>
        </div>
    )
}

export default HomeDesign
