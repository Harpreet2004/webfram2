import React from 'react'

const Articles = () => {
  return (
    <>
    {/* container */}
      <div className='h-[600px] bg-[#FBF9F899] px-[16px] pt-[3rem] w-full max-[1455px]:h-[1000px] max-[1034px]:h-[1400px] max-[743px]:h-[2400px]'>
        {/* top container */}
        <div className='flex justify-between pb-10'>
            <h1 className='35px'>Articles similaires</h1>
            <p className='underline'>Voir toute la collection</p>
        </div>
        {/* feature container */}
        <div className='grid grid-cols-5 overflow-hidden gap-x-[16rem] max-[1455px]:grid-cols-3 max-[1455px]:gap-y-[4rem] max-[1455px]:gap-x-[4rem] max-[1455px]:place-self-center max-[1150px]:gap-x-[1rem] max-[1034px]:grid-cols-2 max-[743px]:grid-cols-1'>
            {/* card */}
            <div className='h-[362px] w-[330px] bg-[#F9F7F5] rounded-sm'>
                {/* upper */}
                <div className='py-[14px] px-[11px] flex  flex-col'>
                    <div className='flex justify-between pb-6'>
                        <img className='h-[26px]' src="assets/heart.png" alt="heart-icon" />
                        <span>Art de la table</span>
                    </div>
                    <div className='flex justify-center items-center'>
                    <img src="assets/Table-ronde-165cm-Festi-1.png" alt="table-img" />
                    </div>
                </div>
                {/* lower */}
                <div className='px-3'>
                    <div className='flex justify-between'>
                        <h2>Title</h2>
                        <h2>0 <sup>€</sup></h2>
                    </div>
                    <div className='flex justify-between'>
                        <h2>0,35€/Pièce · RÉF : VABGN5</h2>
                        <span>20 pièces</span>
                    </div>
                </div>
            </div>
            <div className='h-[362px] w-[330px] bg-[#F9F7F5] rounded-sm'>
                {/* upper */}
                <div className='py-[14px] px-[11px] flex  flex-col'>
                    <div className='flex justify-between pb-6'>
                        <img className='h-[26px]' src="assets/heart.png" alt="heart-icon" />
                        <span>Art de la table</span>
                    </div>
                    <div className='flex justify-center items-center'>
                    <img src="assets/Table-ronde-165cm-Festi-1.png" alt="table-img" />
                    </div>
                </div>
                {/* lower */}
                <div className='px-3'>
                    <div className='flex justify-between'>
                        <h2>Title</h2>
                        <h2>0 <sup>€</sup></h2>
                    </div>
                    <div className='flex justify-between'>
                        <h2>0,35€/Pièce · RÉF : VABGN5</h2>
                        <span>20 pièces</span>
                    </div>
                </div>
            </div>
            <div className='h-[362px] w-[330px] bg-[#F9F7F5] rounded-sm'>
                {/* upper */}
                <div className='py-[14px] px-[11px] flex  flex-col'>
                    <div className='flex justify-between pb-6'>
                        <img className='h-[26px]' src="assets/heart.png" alt="heart-icon" />
                        <span>Art de la table</span>
                    </div>
                    <div className='flex justify-center items-center'>
                    <img src="assets/Table-ronde-165cm-Festi-1.png" alt="table-img" />
                    </div>
                </div>
                {/* lower */}
                <div className='px-3'>
                    <div className='flex justify-between'>
                        <h2>Title</h2>
                        <h2>0 <sup>€</sup></h2>
                    </div>
                    <div className='flex justify-between'>
                        <h2>0,35€/Pièce · RÉF : VABGN5</h2>
                        <span>20 pièces</span>
                    </div>
                </div>
            </div>
            <div className='h-[362px] w-[330px] bg-[#F9F7F5] rounded-sm'>
                {/* upper */}
                <div className='py-[14px] px-[11px] flex  flex-col'>
                    <div className='flex justify-between pb-6'>
                        <img className='h-[26px]' src="assets/heart.png" alt="heart-icon" />
                        <span>Art de la table</span>
                    </div>
                    <div className='flex justify-center items-center'>
                    <img src="assets/Table-ronde-165cm-Festi-1.png" alt="table-img" />
                    </div>
                </div>
                {/* lower */}
                <div className='px-3'>
                    <div className='flex justify-between'>
                        <h2>Title</h2>
                        <h2>0 <sup>€</sup></h2>
                    </div>
                    <div className='flex justify-between'>
                        <h2>0,35€/Pièce · RÉF : VABGN5</h2>
                        <span>20 pièces</span>
                    </div>
                </div>
            </div>
            <div className='h-[362px] w-[330px] bg-[#F9F7F5] rounded-sm'>
                {/* upper */}
                <div className='py-[14px] px-[11px] flex  flex-col'>
                    <div className='flex justify-between pb-6'>
                        <img className='h-[26px]' src="assets/heart.png" alt="heart-icon" />
                        <span>Art de la table</span>
                    </div>
                    <div className='flex justify-center items-center'>
                    <img src="assets/Table-ronde-165cm-Festi-1.png" alt="table-img" />
                    </div>
                </div>
                {/* lower */}
                <div className='px-3'>
                    <div className='flex justify-between'>
                        <h2>Title</h2>
                        <h2>0 <sup>€</sup></h2>
                    </div>
                    <div className='flex justify-between'>
                        <h2>0,35€/Pièce · RÉF : VABGN5</h2>
                        <span>20 pièces</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Articles
