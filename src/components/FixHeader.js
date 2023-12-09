const FixHeader = () => {
  return (
    <div className='absolute top-0 right-0 left-0 flex items-center justify-between text-xs h-[54px] leading-relaxed mb-px bg-neutral-800 z-50'>
      <div className='float-left px-5'>
        <a
          className='my-auto'
          href='https://themeforest.net/item/dreamhome-real-estate-html-template/48432697'
        >
          <img src='/assets/logos/logo.png' alt='logo' />
        </a>
      </div>
      <div className='float-right'>
        <div className='px-5 h-full'>
          <a
            href='https://themeforest.net/checkout/from_item/48432697?license=regular&support=bundle_6month'
            className='px-5 py-1.5 my-auto text-white text-sm rounded-[4px] transition-all shadow-sm shadow-lime-450 bg-lime-350 hover:bg-lime-550'
          >
            Buy now
          </a>
        </div>
      </div>
    </div>
  );
};

export default FixHeader;
