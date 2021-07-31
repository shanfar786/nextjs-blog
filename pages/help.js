import 'bootstrap/dist/css/bootstrap.css'
import Footer from '../components/footer'

export default function Help() {
    return (
    <>
    <div className="container">
        <div className="row form-section">
            <div className="col-5">
                <div className="container-md"> 
                    <h2 className="help-head">Contact Us </h2>
                    <p className="ar-hlp-p">Fill the below details for any enquiry on booking.</p>
                    <div className="ar-empty"></div>
                    <form
                acceptCharset="UTF-8"
                method="POST"
                enctype="multipart/form-data"
                id="ajaxForm"
                
            >
                <div className="form-group mb-2">
                    <label for="exampleInputName">Name</label>
                    <input
                        type="name"
                        className="form-control"
                        id="exampleInputName"
                        aria-describedby="nameHelp"
                        placeholder="Enter Your Name"
                        required
                        name="name"
                       
                    />
                    </div>
                    <div className="ar-empty"></div>
                    <div className="ar-empty"></div>
                    <div className="form-group mb-2">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="example@gmail.com"
                        required
                        name="email"
                       
                    />
                    </div>
                    <div className="ar-empty"></div>
                    <div className="form-group mb-2">
                    <label for="exampleFormControlTextarea1" class="form-label">Message </label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"    placeholder="Your Query…"></textarea>
                        </div>
                        <div className="ar-empty-l2"></div>
                        <button type="submit" class="btn btn-primary">Submit Details</button>
                    </form>
                </div>
            
            </div>
            <div className="col-7">
            <img src="/help.png" alt="Picture of the author" layout="fill"
        objectFit="none"
        quality={100} />
                
            </div>
        </div>
    </div>
    <Footer />
    <style jsx>{`
        .container {
            min-height: 80vh;
            
            display: block;
           margin-top:auto;
           margin-bottom:auto;
            justify-content: center;
            vertical-align: middle;
            align-items: center
        }
        .form-section{
            padding: 2rem;
            box-shadow: 0px 20px 55px #00000014;
        }
        .help-head{
            text-align: center;
            color: #1C2460;
            font-size:32px;
            font-weight:500;
            padding-bottom:5px;
        }
        .ar-hlp-p{
            text-align: center;
            letter-spacing: 0px;
            color: #1C246072;
        }
        .ar-empty{
            height:10px;
        }
        .ar-empty-l2{
            height:25px;
        }
      `}</style>


        </>
    )
  }