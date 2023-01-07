export class ArrayQueue<T>{
    private queue:T[] = []

    length():number{
        return this.queue.length
    }

    isEmpty():boolean{
        return this.queue.length === 0
    }
    enqueue(item:T):void{
        this.queue.push(item);
    }
    dequeue():T{
        if(this.isEmpty()){
            throw new Error("Queue undedlow")
        }
        return this.queue.shift() as T
    }
    front():T | null{
        if(this.isEmpty()){
            return null
        }
        return this.queue[0]
    }

}