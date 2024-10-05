'use client'

import React, { useEffect, useState } from 'react'
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs'
import { useRouter } from 'next/navigation';
import { removeKeysFromQuery } from '@/lib/utils';

const TabsClient = ({defaultValue, className, children }: { defaultValue: string, className: string, children: React.ReactNode }) => {

    const router = useRouter();

    const [tabValue, setTabValue] = useState("top-posts");

    useEffect(() => {
        const newUrl = removeKeysFromQuery({
            params: '',
            keysToRemove: ['page']
        });
        router.push(newUrl);        
    },[router, tabValue])

    const handleClickTab = (value:any) => {
        setTabValue(value);
    }

  return (
    <Tabs defaultValue={defaultValue} className={className} value={tabValue} onValueChange={setTabValue}>
        <TabsList className="background-light800_dark400 min-h-[42px] p-1">
            <TabsTrigger value="top-posts" className="tab" onClick={() => handleClickTab('top-posts')}>Top Posts</TabsTrigger>
            <TabsTrigger value="answers" className="tab" onClick={() => handleClickTab('answers')}>Answers</TabsTrigger>
        </TabsList>
        {children}
    </Tabs>
  )
}

export default TabsClient