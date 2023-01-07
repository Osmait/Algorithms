import { ArrayQueue } from "../dataStructure/arrayQueue"



describe("Testing Queue data structure",()=>{
    it("enqueue should add a new element to the queue",()=>{
        const queue = new ArrayQueue<number>()
        queue.enqueue(1)
        expect(queue.length()).toBe(1)
    })
})