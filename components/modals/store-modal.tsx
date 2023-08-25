"use client"

import { useStoreModal } from "@/hooks/use-store-modal"
import { Model } from "@/components/ui/model"


export const StoreModal = () => {
    const StoreModal = useStoreModal();

    return (
        <Model
            title="Create Store"
            description="Add a new store to manage products and categories"
            isOpen={StoreModal.isOpen}
            onClose={StoreModal.onClose}
        >
            Future create sore form
        </Model>
    );
}