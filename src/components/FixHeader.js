const FixHeader = () => {
  return (
    <div className='text-xs h-14 leading-relaxed flex justify-between mb-px bg-neutral-800 z-50'>
      <div className='h-full flex items-center px-5'>
        <a href='https://themeforest.net/item/dreamhome-real-estate-html-template/48432697'>
          <img src='/assets/logos/logo.png' alt='logo' className='' />
        </a>
      </div>
      <div>
        <div className='px-5 h-full flex items-center'>
          <a
            href='https://themeforest.net/checkout/from_item/48432697?license=regular&support=bundle_6month'
            className='px-5 py-1.5 text-white text-sm rounded-md shadow-sm shadow-lime-500 bg-lime-500 hover:bg-lime-600'
          >
            Buy now
          </a>
        </div>
      </div>
    </div>
  );
};

export default FixHeader;
