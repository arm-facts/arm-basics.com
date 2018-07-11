![Proprietary Software](/assets/images/chained.png)

# ARM architecture : Understand the facts

The 9th of July, 2018, ARM launched a [FUD](https://en.wikipedia.org/wiki/Fear,_uncertainty_and_doubt) campaign against [FLOSS](https://en.wikipedia.org/wiki/Free_and_open-source_software#FLOSS) and [RISC-V](https://en.wikipedia.org/wiki/RISC-V) disguised as "facts". They created the website [riscv-basics.com](https://riscv-basics.com/) [\[ScreenShot\]](/assets/images/riscv-basics.com-screenshot.jpg) [\[Google Cache\]](https://webcache.googleusercontent.com/search?q=cache:https://riscv-basics.com/) [\[Wayback Machine\]](https://web.archive.org/web/20180708231736/https://riscv-basics.com/) in order to discourage manufacturers from using RISC-V as their processor architectures.

Update: The riscv-basics.com site was taken down [by ARM on the 10th of July](https://www.theregister.co.uk/2018/07/10/arm_riscv_website/).

This is a demonstration of the open source community responding to ARM's lies.

## Six things to consider before designing a System-on-Chip

The instruction set architecture (ISA) is the foundation of all chip or System-on-Chip (SoC) products. It is therefore one of the most fundamental design choices you will make. If you are considering using a proprietary ISA, such as ARM, it is critical to understand the key factors you should consider as part of your go-to-market strategy.

### Cost

Proprietary instruction set architectures, such as ARM, have a license fee and currently an ongoing royalty model that can cost tens of millions of dollars. Moreover, the cost of licensing an ARM ISA accounts for at least 1% of all your sales.

ARM annual architectural license fee pays for complete design team for several RISC-V cores.

### Fragmentation risk

ARM fragments their own ISAs (ARM v6/7/8, Thumb 1, Thumb2, ThumbEE, Jazelle, ARM v8, v8-M, NVIC/VIC/GICv2/3/4, multiple hypervisor variants/..., DSP/NEON/VFP/SVE). 

ARM doesn’t allow users to customize, forcing them to buy a second core, or more wisely, move to RISC-V.

### Improvements

The ARM instruction set architecture doesn't allow open-source developers to contribute. This means you are stuck at the mercy of the original vendor and any backdoors it might have. This restriction makes it more difficult for people to trust your chip and prevents the community from bringing improvements to your systems for free.

### Design Assurance

Verification and validation of processor designs can consume 75% of total design time. Having it open source means volunteers can participate in the creation of your design by bringing their unique expertise in the field, for free. This reduces design costs.

Extensions are optional, you can buy preverified cores. In fact, 8x fewer instructions and simpler privilege architecture results in a much simpler verification process.

### Large, Supportive Community

It is important an architecture is well received by an active community, so it can help you port a more diverse range of software, services and designs to your processor architecture. This guarantees market choice, product quality and an optimal time to market. Proprietary ecosystems do not have this level of trust and openness.

It's true RISC-V ecosystem is weaker than ARM’s right now, but it is growing much faster.

### Security

Cyberthreats mean that robust chip security cannot ever be optional. Proprietary products can be severely insecure, and because they can't benefit from years of scrutiny from open source developers and industry experts, [Spectre](https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)) and [Meltdown](https://en.wikipedia.org/wiki/Meltdown_(security_vulnerability)) can happen to them. ARM doesn't concern itself with security issues as the public expects. They ignored [ret2usr](https://github.com/hardenedlinux/grsecurity-101-tutorials/blob/master/kernel_mitigation.md#ret2usr-protection) for a very long period of time, while millions of ARM users were exposed to the massive exploit, until a few security features (domain, PXN) were added into ARMv7. The 1st PXN implementation was done by PaX/Grsecurity, while the 1st [implementation of domain](https://grsecurity.net/recent_arm_security_improvements.php) was done by PaX's UDEREF. To date, ARM has yet to credit them. RISC-V will have the chance to make things right in the beginning and that's what security subgroups and Security Standing Committee from the RISC-V foundation have been doing from the start.

### Bootloader

Because the ARM has no standard of the bootstrap process, the bootloader design may vary from vendors. This would require the developer to deal with diffirent platforms. Bootstrap process wwould be very strange on some platforms, like [Paspberry Pi with the Broadcom SoC](https://github.com/AntonioND/rpi3-arm-tf-bootstrap), whose CPU is pulled up by [VideoCore](https://en.wikipedia.org/wiki/VideoCore).  And many embedded systems use Uboot as bootloader, it is still hard to por EFI-based OS on these SoCs. Althrough many vendor, like Apple, Qualcomm and Microsoft would port full EFI support for ARM devices, it still has a long way to go.

---

Whether you are looking to create a chip from scratch or looking for a complete solution, take advantage of an architecture that is open-source and already tested by the community. Get started with RISC-V - The free and open RISC Instruction Set Architecture.

Design Your Custom SoCs with Confidence

Free, trusted IP with expert design support

[**Start Now**](https://riscv.org/risc-v-foundation/)

---

**Disclaimer: this website is the personal opinion and is not the opinion or policy of any organization.**

*You can still submit your [Pull Request to give your opinion](https://github.com/arm-facts/arm-basics.com/pulls).*

---

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/2.0/88x31.png)](http://creativecommons.org/licenses/by-sa/2.0/)

This work is licensed under a [Creative Commons Attribution-ShareAlike 2.0 Generic License](http://creativecommons.org/licenses/by-sa/2.0/).
