
import './CardCustom.css';
import Button from "../Button/Button";

interface Props {
  isImageLeft?: boolean;
  imgSrc?: string;
  imgSize?: string;
  headContent: string;
  descContent: string;
  btnTitle?: string;
  btnLink?:string;
  typeCard?:string;
}

const CardCustom = (props: Props) => {
  const {isImageLeft = true, imgSrc = '',imgSize = 'default', headContent, descContent, btnTitle='', btnLink='', typeCard= 'primary'} = props;
  
  const headContentClassName = typeCard === 'primary' ? 'text-color-dark fs-3': 'text-color-info fs-1 lh-1 fw-bold';
  const descContentClassName = typeCard === 'primary' ? 'text-color-dark fs-1 lh-1 fw-bold': 'text-color-dark';
  const imgClassName = imgSize === 'default' ? 'w-100p ' : 'w-70p ';
  return (
    <div className="container card-custom-container">
      <div className="row">
        {
        isImageLeft && imgSrc ? <div className="col-6">
          <div className="card-img-custom-wrap">
            <img src={imgSrc} className={imgClassName}/>
          </div>
        </div> : <></>
        }
        
        <div className="col-6">
          <div className="card bg-transparent">
            <div className="card-body">
              <h5 className={`card-title mt-4 ${headContentClassName}`}>
                {headContent}
              </h5>
              <p className={`card-title mt-4 ${descContentClassName}`}>
                {descContent}
              </p>
              {btnTitle ? <Button className='mt-4' textButton={btnTitle} btnLink={btnLink}/> : <></>}
            </div>
          </div>
        </div>

        {
        !isImageLeft ? <div className="col-6">
          <div className="card-img-custom-wrap">
            <img src={imgSrc} className={imgClassName}/>
          </div>
        </div> : <></>
        }
      </div>
    </div>
  );
};

export default CardCustom;
