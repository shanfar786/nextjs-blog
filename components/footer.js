import Link from 'next/link'
export default function footer() {
    return (

        <>
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt et.</p>
                        </div>

                    </div>
                    <div className="col-3">
                      <ul>
                        <li>
                    <Link href="#">
        <a>About</a>
      </Link></li><li>
      <Link href="#">
        <a>About</a>
      </Link></li>
      <li>
      <Link href="#">
        <a>About</a>
      </Link></li><li>
      <Link href="#">
        <a>About</a>
      </Link></li></ul>
                    </div>
                    <div className="col-3">
                    <ul>
                        <li>
                    <Link href="#">
        <a>About</a>
      </Link></li><li>
      <Link href="#">
        <a>About</a>
      </Link></li>
      <li>
      <Link href="#">
        <a>About</a>
      </Link></li><li>
      <Link href="#">
        <a>About</a>
      </Link></li></ul>
                        
                    </div>
                    <div className="col-2">
                    <ul>
                        <li>
                    <Link href="#">
        <a>About</a>
      </Link></li><li>
      <Link href="#">
        <a>About</a>
      </Link></li>
      <li>
      <Link href="#">
        <a>About</a>
      </Link></li><li>
      <Link href="#">
        <a>About</a>
      </Link></li></ul>
                        
                   </div>
                </div>
            </div>
        </div>
        <div>
          <p>© 2021 All Rights Reserved | Airvays.com</p>
        </div>

        <style jsx>{`
        .container {
          max-width:85%;
         
        }`}</style>
        </>
    )
  }