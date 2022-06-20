function BoardHeader() {
    return(
        <>
        <div className="h-20 bg-cover" style={{backgroundImage:'url("https://styles.redditmedia.com/t5_322b2g/styles/bannerBackgroundImage_1y5kdwkueu361.png?width=4000&s=40d12a21f3bbfe13d8fd8fbddb1c8eab6fce1076")'}}>
      </div>
      <div className="bg-reddit_dark-brighter">
        <div className="mx-6 relative flex">
        <div className="h-20 w-20 rounded-full overflow-hidden relative -top-3 border-4 border-white bg-white">
        <img src="https://styles.redditmedia.com/t5_322b2g/styles/communityIcon_xpabmeyl27e61.png?width=256&s=f3f1f2d79eee8938c6b29ef14acd244e0b8b6dc8" alt=""/>
      </div>
      <div className="pt-2 pl-4">
          <h1 className="text-gray-300 text-3xl">TheBoysChannel</h1>
          <h5 className="text-gray-500">r/TheBoysChannel</h5>
          </div>
        </div>
      </div>
      </>
    );
}
export default BoardHeader;