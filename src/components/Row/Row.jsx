function Row({ children }) {
  return (
    <div className="-mx-5 flex gap-4 overflow-x-auto px-5 pb-5 pt-2 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-8 sm:px-8 lg:gap-5 xl:-mx-20 xl:px-20">
      {children}
    </div>
  );
}

export default Row;
