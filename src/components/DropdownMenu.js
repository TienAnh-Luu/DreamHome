{
  /* <li className='relative w-full text-left translate-y-[11px] transition-all duration-500 ease-in-out mb-[15px] group/subItem group-hover/nav:translate-y-0 group-hover/nav:delay-[70]'>
        <a
          href='index.html'
          className='text-amber-450 capitalize font-medium text-[15px] transition-all duration-500 ease-in-out long-arrow-right group-hover/subItem:text-amber-450 group-hover/subItem:pl-[20px] group-hover/subItem:before:opacity-100 group-hover/subItem:before:content-["\f178"]'
        >
          Home Page 01
        </a>
      </li>
      <li className='relative w-full text-left translate-y-[11px] transition-all duration-500 ease-in-out mb-[15px] group/subItem group-hover/nav:translate-y-0 group-hover/nav:delay-[70]'>
        <a
          href='index.html'
          className='text-blueGray-950 capitalize font-medium text-[15px] transition-all duration-500 ease-in-out long-arrow-right group-hover/subItem:text-amber-450 group-hover/subItem:pl-[20px] group-hover/subItem:before:opacity-100 group-hover/subItem:before:content-["\f178"]'
        >
          Home Page 01
        </a>
      </li>
      <li className='relative w-full text-left translate-y-[11px] transition-all duration-500 ease-in-out mb-[15px] group/subItem group-hover/nav:translate-y-0 group-hover/nav:delay-[70]'>
        <a
          href='index.html'
          className='text-blueGray-950 capitalize font-medium text-[15px] transition-all duration-500 ease-in-out long-arrow-right group-hover/subItem:text-amber-450 group-hover/subItem:pl-[20px] group-hover/subItem:before:opacity-100 group-hover/subItem:before:content-["\f178"]'
        >
          Home Page 01
        </a>
      </li>
      <li className='relative w-full text-left translate-y-[11px] transition-all duration-500 ease-in-out mb-[15px] group/subItem group-hover/nav:translate-y-0 group-hover/nav:delay-[70]'>
        <a
          href='index.html'
          className='text-blueGray-950 capitalize font-medium text-[15px] transition-all duration-500 ease-in-out long-arrow-right group-hover/subItem:text-amber-450 group-hover/subItem:pl-[20px] group-hover/subItem:before:opacity-100 group-hover/subItem:before:content-["\f178"]'
        >
          Home Page 01
        </a>
      </li>
      <li className='relative w-full text-left translate-y-[11px] transition-all duration-500 ease-in-out mb-[15px] group/subItem group-hover/nav:translate-y-0 group-hover/nav:delay-[70]'>
        <a
          href='index.html'
          className='text-blueGray-950 capitalize font-medium text-[15px] transition-all duration-500 ease-in-out long-arrow-right group-hover/subItem:text-amber-450 group-hover/subItem:pl-[20px] group-hover/subItem:before:opacity-100 group-hover/subItem:before:content-["\f178"]'
        >
          Home Page 01
        </a>
      </li> */
}

const getAnchorClassName = (item, itemLevel) => {
  return [
    `${item?.current ? "text-amber-450" : "text-blueGray-950"}`,
    item?.subItems?.length > 0 && "angle-right",
    "capitalize",
    "font-medium",
    "text-[15px]",
    "transition-all",
    "duration-500",
    "ease-in-out",
    "long-arrow-right",
    `group-hover/level-${itemLevel}:text-amber-450`,
    `group-hover/level-${itemLevel}:pl-[20px]`,
    `group-hover/level-${itemLevel}:before:opacity-100`,
    `group-hover/level-${itemLevel}:before:content-["\\f178"]`,
  ]
    .filter(Boolean)
    .join(" ");
};
// `${item?.current ? "text-amber-450" : "text-blueGray-950"} ${
//   item?.subItems?.length > 0 ? "angle-right" : ""
// } capitalize font-medium text-[15px] transition-all duration-500 ease-in-out long-arrow-right group-hover/level-${itemLevel}:text-amber-450 group-hover/level-${itemLevel}:pl-[20px] group-hover/level-${itemLevel}:before:opacity-100 group-hover/level-${itemLevel}:before:content-["\\f178"]`;

const DropdownMenu = ({ items = [], level }) => {
  const ulClasses = [
    "absolute",
    level > 1 && "left-full top-0",
    "text-black",
    "w-64",
    "z-[1]",
    "pt-[25px]",
    "px-[30px]",
    "pb-[30px]",
    "scale-y-0",
    "origin-top",
    "opacity-0",
    "invisible",
    "shadow-md",
    "shadow-[rgba(0,0,0,0.1)]",
    "transition-all",
    "duration-300",
    "ease-in-out",
    `group-hover/level-${level - 1}:opacity-100`,
    `group-hover/level-${level - 1}:scale-y-100`,
    `group-hover/level-${level - 1}:visible`,
  ];
  // const ulClassName = `absolute ${
  //   level > 1 ? "left-full top-0" : ""
  // } text-black w-64 z-[1] pt-[25px] px-[30px] pb-[30px] scale-y-0 origin-top opacity-0 invisible shadow-md shadow-[rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out group-hover/level-${
  //   level - 1
  // }:opacity-100 group-hover/level-${level - 1}:scale-y-100 group-hover/level-${
  //   level - 1
  // }:visible`;

  const liClasses = [
    "relative",
    "w-full",
    "text-left",
    "translate-y-[11px]",
    "transition-all",
    "duration-500",
    "ease-in-out",
    "mb-[15px]",
    "last:mb-0",
    `group/level-${level}`,
    `group-hover/level-${level - 1}:translate-y-0`,
    `group-hover/level-${level - 1}:delay-[70]`,
  ];

  const liClassName = `relative w-full text-left translate-y-[11px] transition-all duration-500 ease-in-out mb-[15px] last:mb-0 group/level-${level} group-hover/level-${
    level - 1
  }:translate-y-0 group-hover/level-${level - 1}:delay-[70]`;

  return (
    <ul className={ulClasses.filter(Boolean).join(" ")}>
      {items &&
        items?.length > 0 &&
        items.map((item) => (
          <li key={item.label} className={liClassName}>
            <a href='index.html' className={getAnchorClassName(item, level)}>
              {item.label}
            </a>
            {item?.subItems && item?.subItems.length > 0 && (
              <DropdownMenu items={item.subItems} level={level + 1} />
            )}
          </li>
        ))}
    </ul>
  );
};

export default DropdownMenu;
