import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import Main from '../../../main'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'dynamic-pagination'

  mainInc: Main = new Main()
  displayList: any[] = []
  end: boolean = false

  async ngOnInit(): Promise<void> {
    await this.mainInc.init()

    this.displayList = this.mainInc.getDisplayList()
  }

  async fetchMoreItems(): Promise<void> {
    const newSlice = await this.mainInc.paginate()

    if (newSlice.length === this.displayList.length)
      this.end = true

    else this.displayList = newSlice
  }

  isString(item: any): boolean {
    return typeof item === 'string';
  }
}
