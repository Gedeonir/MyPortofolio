import React from 'react'

export default function DeleteModal({openDeleteModal,setOpenDeleteModal}) {
  return (
    <div id="deleteModal" tabindex="-1" aria-hidden="true" class="overflow-y-auto overflow-x-hidden absolute z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full py-72 bg-secondary dark:bg-dark_secondary  bg-opacity-50 dark:bg-opacity-70">
        <div class="relative p-4 w-full max-w-md h-full md:h-auto mx-auto">
            <div class="relative p-4 text-center text-primary shadow dark:bg-dark_secondary_2 sm:p-5 bg-secondary">
                <svg class="text-gray-400 dark:text-secondary_2 w-11 h-11 mb-3.5 mx-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                <p class="mb-4 text-gray-500 dark:text-secondary_2">Are you sure you want to delete <label className='font-bold'>{'name'}</label>?</p>
                <div class="flex justify-center items-center space-x-4">
                    <button data-modal-toggle="deleteModal" type="button" class="py-2 px-3 text-sm font-medium border border-primary focus:ring-4 focus:outline-none focus:ring-secondary_2 dark:border-secondary_2 dark:text-secondary_2" onClick={()=>setOpenDeleteModal(!openDeleteModal)}>
                        No, cancel
                    </button>
                    <button type="submit" class="py-2 px-3 text-sm font-medium text-center text-secondary bg-danger hover:bg-opacity-50 focus:ring-4 focus:outline-none focus:ring-danger">
                        Yes, I'm sure
                    </button>
                </div>
            </div>
        </div>
    </div>

  )
}
