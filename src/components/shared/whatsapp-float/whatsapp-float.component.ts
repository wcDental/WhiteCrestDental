
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-whatsapp-float',
  standalone: true,
  template: `
    <a href="https://wa.me/9000000000"
       target="_blank"
       rel="noopener noreferrer"
       class="fixed bottom-6 right-6 z-50 group flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_24px_rgba(37,211,102,0.3)] transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 print:hidden"
       aria-label="Chat with us on WhatsApp">
       
       <!-- Tooltip Text (Visible on hover) -->
       <span class="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-sm font-semibold py-2 px-4 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 whitespace-nowrap shadow-lg pointer-events-none">
         Chat with us
         <!-- Arrow -->
         <span class="absolute top-1/2 -right-1.5 -mt-1.5 border-6 border-transparent border-l-slate-900 border-r-0 border-t-6 border-b-6 scale-y-50"></span>
       </span>

       <!-- WhatsApp Icon (Standard 24x24) -->
       <svg class="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
         <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.66C14.25 3.66 16.31 4.51 17.87 6.07C19.42 7.63 20.28 9.7 20.28 11.91C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.66 12.05 3.66ZM9.53 7.8C9.28 7.8 8.87 7.89 8.65 8.13C8.43 8.37 7.8 8.96 7.8 10.16C7.8 11.36 8.68 12.53 8.8 12.69C8.93 12.86 10.53 15.32 12.98 16.38C13.56 16.63 14.02 16.78 14.37 16.9C14.93 17.07 15.45 17.05 15.86 17C16.32 16.93 17.28 16.42 17.48 15.86C17.68 15.29 17.68 14.81 17.62 14.71C17.56 14.6 17.41 14.54 17.11 14.39C16.81 14.24 15.34 13.51 15.06 13.41C14.79 13.31 14.59 13.26 14.39 13.56C14.19 13.86 13.62 14.54 13.44 14.74C13.27 14.94 13.09 14.97 12.79 14.82C12.49 14.67 11.53 14.36 10.39 13.34C9.51 12.56 8.91 11.59 8.74 11.29C8.57 10.99 8.72 10.83 8.87 10.68C9 10.55 9.16 10.33 9.31 10.16C9.46 9.99 9.51 9.87 9.61 9.67C9.71 9.47 9.66 9.3 9.58 9.14C9.51 8.97 8.93 7.55 8.69 6.96C8.45 6.4 8.21 6.47 8.04 6.48C7.88 6.48 7.7 6.48 7.51 6.48L9.53 7.8Z"/>
       </svg>
       
       <!-- Notification Dot (Pulsing) -->
       <span class="absolute top-1 right-1 flex h-3.5 w-3.5">
         <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
         <span class="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500 border-2 border-white"></span>
       </span>
    </a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhatsappFloatComponent {}
