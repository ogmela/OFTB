import ButtonStyles from './BuyButton.module.css';

const BuyButton = ({ text, variant, type }) => {
    return (
        <button className={ButtonStyles[`buyNow${variant}`]} type={type}>{text}
        <div className={ButtonStyles.starOne}>
            <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{ shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "-webkit-optimize-contrast", fillRule: "evenodd", clipRule: "evenodd" }} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className={ButtonStyles[`fil${variant}`]}></path></g></svg>
        </div>
        <div className={ButtonStyles.starTwo}>
            <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{ shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "-webkit-optimize-contrast", fillRule: "evenodd", clipRule: "evenodd" }} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className={ButtonStyles[`fil${variant}`]}></path></g></svg>
        </div>
        <div className={ButtonStyles.starThree}>
            <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{ shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "-webkit-optimize-contrast", fillRule: "evenodd", clipRule: "evenodd" }} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className={ButtonStyles[`fil${variant}`]}></path></g></svg>
        </div>
        <div className={ButtonStyles.starFour}>
            <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{ shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "-webkit-optimize-contrast", fillRule: "evenodd", clipRule: "evenodd" }} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className={ButtonStyles[`fil${variant}`]}></path></g></svg>
        </div>
        <div className={ButtonStyles.starFive}>
            <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{ shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "-webkit-optimize-contrast", fillRule: "evenodd", clipRule: "evenodd" }} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className={ButtonStyles[`fil${variant}`]}></path></g></svg>
        </div>
        <div className={ButtonStyles.starSix}>
            <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{ shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "-webkit-optimize-contrast", fillRule: "evenodd", clipRule: "evenodd" }} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className={ButtonStyles[`fil${variant}`]}></path></g></svg>
        </div>
    </button>
    );
};
export default BuyButton;