import React from 'react'

const Products = () => {
  return (
    <>
    {/* container */}
      <div className='h-[600px] px-[16px] pt-[3rem] max-[1237px]:h-[1000px] max-[828px]:h-[1600px]'>
      <div className='flex justify-between pb-10 '>
            <h1 className='35px'>Articles similaires</h1>
            <p className='underline'>Voir toute la collection</p>
        </div>
        {/* feature container */}
        <div className='grid grid-cols-3 place-items-center gap-x-[1rem] max-[1237px]:grid-cols-2   max-[1237px]:gap-y-[4rem] max-[828px]:grid-cols-1'>
            {/* card */}
            <div className='h-[362px] w-[480px] max-[1467px]:w-[440px] max-[1345px]:w-[400px] max-[418px]:w-[300px]'>
                {/* upper */}
                <div className='py-[14px] px-[11px] flex  rounded-lg flex-col bg-[#F9F7F5]'>
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
            <div className='h-[362px] w-[480px]  max-[1467px]:w-[440px] max-[1345px]:w-[400px] max-[418px]:w-[300px]'>
                {/* upper */}
                <div className='py-[14px] px-[11px] flex  rounded-lg flex-col bg-[#F9F7F5]'>
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
            <div className='h-[362px] w-[480px]  max-[1467px]:w-[440px] max-[1345px]:w-[400px] max-[418px]:w-[300px]'>
                {/* upper */}
                <div className='py-[14px] px-[11px] flex  rounded-lg flex-col bg-[#F9F7F5]'>
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

export default Products
